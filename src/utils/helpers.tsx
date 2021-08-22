export function truncate(title: string): string {
    if (typeof title !== "string") {
      return "";
    }
    return title.substring(0, 20) + " ...";
  }