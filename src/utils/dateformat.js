import { format, formatDistanceToNow } from "date-fns";

// Your timestamp
export const dateFormatting = (timestamp) => {
  const date = new Date(timestamp);

  const formattedDate = format(date, "MMMM d, yyyy");

  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  return { formattedDate, relativeTime };
};
