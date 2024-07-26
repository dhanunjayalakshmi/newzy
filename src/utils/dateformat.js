import { format, formatDistanceToNow } from "date-fns";

export const dateFormatting = (timestamp) => {
  const newTimeStamp =
    timestamp?.substring(0, 10) + "T" + timestamp?.substring(11, 19) + "Z";

  const date = new Date(newTimeStamp);
  try {
    if (isNaN(date)) {
      throw new Error("Invalid date");
    }
  } catch (error) {
    return { formattedDate: "Invalid date", relativeTime: "Unknown time" };
  }

  const formattedDate = format(date, "MMMM d, yyyy");

  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  return { formattedDate, relativeTime };
};
