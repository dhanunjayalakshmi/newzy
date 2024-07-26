import { format, formatDistanceToNow } from "date-fns";

export const dateFormatting = (timestamp) => {
  const date = new Date(timestamp);

  const formattedDate = format(date, "MMMM d, yyyy");

  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  return { formattedDate, relativeTime };
};

// export const dateFormatting2 = (timestamp) => {
//   const correctedTimestamp = timestamp.replace(" ", "T");
//   console.log("Before...", correctedTimestamp);
//   // console.log(
//   //   "Before....",
//   //   timestamp?.replace(" ", "T")?.replace(" +0000", "Z")
//   // );
//   const date = new Date(correctedTimestamp);
//   console.log("Date....", date);

//   const formattedDate = format(date, "MMMM d, yyyy, HH:mm:ss");
//   console.log("Formatted Date....", formattedDate);

//   const relativeTime = formatDistanceToNow(date, { addSuffix: true });

//   return { formattedDate, relativeTime };
// };

export const dateFormatting2 = (timestamp) => {
  const isoTimestamp = timestamp?.replace(" ", "T");

  let date;
  try {
    date = new Date(isoTimestamp);
    // Check if date is Invalid
    if (isNaN(date)) {
      throw new Error("Invalid date");
    }
  } catch (error) {
    // console.error("Error parsing date: ", error.message);
    return { formattedDate: "Invalid date", relativeTime: "Unknown time" };
  }

  // Format the date as "July 26, 2024"
  const formattedDate = format(date, "MMMM d, yyyy");

  // Calculate the difference from the current time
  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  return { formattedDate, relativeTime };
};
