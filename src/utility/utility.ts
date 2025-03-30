export function isValidPassword(password: string) {
    return (
        /^.{8,}$/.test(password) &&        // Minimum 8 characters
        /[a-z]/.test(password) &&       // At least 1 lowercase letter
        /[A-Z]/.test(password) &&       // At least 1 uppercase letter
        /\d/.test(password) &&             // At least 1 digit
        /[!@#$%^&*(),.?":{}|<>+-_=;]/.test(password) // At least 1 special character
    );
}

export function formatHumanReadableDate(dateString: string | Date | undefined): string {
    if (!dateString) {
        return "";
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return "Invalid date";
    }

    return date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        month: "short",
        day: "numeric",
        year: "numeric",
    }).replace(",", "");
}


export function showTimeLeft(targetTime: string | Date | undefined): string {
    if (!targetTime) return "Invalid date";

    const targetDate = new Date(targetTime);
    if (isNaN(targetDate.getTime())) return "Invalid date";

    const now = new Date();
    let diff = Math.max(0, targetDate.getTime() - now.getTime()); // Ensure non-negative values

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= 1000 * 60 * 60 * 24;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= 1000 * 60 * 60;
    const minutes = Math.floor(diff / (1000 * 60));

    const result: string[] = [];
    if (days) result.push(`${days}Day${days > 1 ? "s" : ""}`);
    if (hours) result.push(`${hours}Hour${hours > 1 ? "s" : ""}`);
    if (minutes) result.push(`${minutes}Min`);

    return result.length ? result.join(" ") + " left" : "Time is up";
}


export function isValidTicket(ticket:string) {
    const regex = /^(?:[1-9]|[1-4]\d|5[0-5])(?:-(?:[1-9]|[1-4]\d|5[0-5])){4}-(?:[1-9]|1[0-5])$/;
    return regex.test(ticket);
  }