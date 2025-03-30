import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { debounce } from 'lodash';

type BlogFormData = {
  authorName: string;
  title: string;
  category: string;
  subCategories: string[];
  summary: string;
  content: string;
  publicationDate: string;
  tags: string[];
  images: FileList | null;
};

type PreviewData = {
  title: string;
  author: string;
  date: string;
  category: string;
  subCategories: string[];
  tags: string[];
  summary: string;
  content: string;
  images: string[];
};

const categoryOptions = ['Adventure', 'Travel', 'Food', 'Culture'];
const tagOptions = ['Hiking', 'Beach', 'Mountain', 'City'];

export default function BlogForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormData>({
    defaultValues: {
      authorName: '',
      title: '',
      category: '',
      subCategories: [],
      summary: '',
      content: '',
      publicationDate: new Date().toISOString().split('T')[0],
      tags: [],
      images: null,
    }
  });

  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isAutosaving, setIsAutosaving] = useState(false);

  const autosaveDraft = debounce(() => {
    const formData = getValues();
    const draftData = {
      ...formData,
      images: null,
    };
    setIsAutosaving(true);
    localStorage.setItem('blogDraft', JSON.stringify(draftData));
    setTimeout(() => setIsAutosaving(false), 1000);
  }, 2000);

  useEffect(() => {
    const subscription = watch(() => autosaveDraft());
    return () => subscription.unsubscribe();
  }, [watch, autosaveDraft]);

  const uploadImagesToCloudinary = async (files: FileList) => {
    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'VlogSharing');
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dvpbeekmy/image/upload',
        formData
      );
      return response.data.secure_url;
    });
    return await Promise.all(uploadPromises);
  };

  const onSubmit = async (data: BlogFormData) => {
    try {
      const imageUrls = data.images ? await uploadImagesToCloudinary(data.images) : [];

      const blogData = {
        title: data.title,
        content: data.content,
        summary: data.summary,
        category: data.category,
        subCategory: data.subCategories[0] || '',
        tags: data.tags,
        publicationDate: data.publicationDate,
        images: imageUrls,
        author: data.authorName
      };

      const response = await axios.post('http://localhost:5000/api/v1/blogs', blogData);
      
      if (response.status === 201) {
        alert('Blog published successfully!');
        localStorage.removeItem('blogDraft');
        reset();
        setSelectedFiles([]);
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
      if (axios.isAxiosError(error)) {
        alert(`Error: ${error.response?.data?.message || error.message}`);
      } else {
        alert('Failed to publish blog');
      }
    }
  };

  const handlePreview = () => {
    const formData = getValues();
    const imageUrls = selectedFiles.map(file => URL.createObjectURL(file));
    
    setPreviewData({
      title: formData.title || 'Untitled',
      author: formData.authorName || 'Anonymous',
      date: formData.publicationDate 
        ? new Date(formData.publicationDate).toLocaleDateString() 
        : new Date().toLocaleDateString(),
      category: formData.category || 'Uncategorized',
      subCategories: formData.subCategories || [],
      tags: formData.tags || [],
      summary: formData.summary || 'No summary provided',
      content: formData.content || 'No content yet',
      images: imageUrls
    });
  };

  // Cleanup object URLs when component unmounts
  useEffect(() => {
    return () => {
      if (previewData?.images) {
        previewData.images.forEach(url => URL.revokeObjectURL(url));
      }
    };
  }, [previewData]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Blog Post</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Author and Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2">Author Name:</label>
            <input
              {...register("authorName", { required: "Author name is required" })}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.authorName && (
              <p className="text-red-500 text-sm mt-1">{errors.authorName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Blog Title:</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>
        </div>

        {/* Category and Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2">Category:</label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="">Select a category</option>
              {categoryOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-lg font-semibold mb-2">Sub-category:</label>
            <Controller
              name="subCategories"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  multiple
                  className="w-full p-3 border border-gray-300 rounded-md h-auto min-h-[100px]"
                >
                  {categoryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              )}
            />
            <p className="text-sm text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
          </div>
          
          <div>
            <label className="block text-lg font-semibold mb-2">Tags:</label>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  multiple
                  className="w-full p-3 border border-gray-300 rounded-md h-auto min-h-[100px]"
                >
                  {tagOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              )}
            />
          </div>
        </div>

        {/* Publication Date */}
        <div className="w-full md:w-1/3">
          <label className="block text-lg font-semibold mb-2">Publication Date:</label>
          <input
            type="date"
            {...register("publicationDate", { required: "Publication date is required" })}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.publicationDate && (
            <p className="text-red-500 text-sm mt-1">{errors.publicationDate.message}</p>
          )}
        </div>

        {/* Summary and Content */}
        <div>
          <label className="block text-lg font-semibold mb-2">Summary:</label>
          <textarea
            {...register("summary", { required: "Summary is required" })}
            className="w-full p-3 border border-gray-300 rounded-md h-32"
          />
          {errors.summary && (
            <p className="text-red-500 text-sm mt-1">{errors.summary.message}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Content:</label>
          <textarea
            {...register("content", { required: "Content is required" })}
            className="w-full p-3 border border-gray-300 rounded-md h-64"
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg font-semibold mb-2">Images:</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              multiple
              {...register("images", {
                onChange: (e) => {
                  if (e.target.files) {
                    setSelectedFiles(Array.from(e.target.files));
                  }
                }
              })}
              className="hidden"
            />
            <label htmlFor="image-upload" className="cursor-pointer block">
              <p className="text-gray-500">Click to upload images</p>
            </label>
            {selectedFiles.length > 0 && (
              <p className="mt-2 text-sm text-gray-600">
                {selectedFiles.length} file(s) selected
              </p>
            )}
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-6">
          <button
            type="button"
            onClick={handlePreview}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Preview
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isSubmitting ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </form>

      {/* Preview Section */}
      {previewData && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Blog Preview</h2>
          
          {previewData.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {previewData.images.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              ))}
            </div>
          )}

          <h1 className="text-3xl font-bold mb-2">{previewData.title}</h1>
          <div className="flex items-center space-x-4 text-gray-600 mb-4">
            <p>By {previewData.author}</p>
            <span>•</span>
            <p>{previewData.date}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              {previewData.category}
            </span>
            {previewData.subCategories.map((cat, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                {cat}
              </span>
            ))}
            {previewData.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {previewData.summary && (
            <div className="mb-6 p-4 bg-blue-50 rounded-md">
              <h3 className="font-bold mb-2">Summary</h3>
              <p>{previewData.summary}</p>
            </div>
          )}

          <div className="prose max-w-none">
            {previewData.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}