export const downloadCSV = (csvContent) => {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "answers.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const convertToCSV = (data) => {
  const headers = ["order", "title", "type", "answer"];
  const rows = data.map((item) =>
    [
      item.questionOrder,
      item.questionTitle,
      item.questionType,
      item.questionAnswer,
    ].join(",")
  );
  return [headers.join(","), ...rows].join("\n");
};
