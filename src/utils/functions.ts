export function getCookieValue(cookieName: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(cookieName + "="))
    ?.split("=")[1];
}

export function checkEquality(items: any[]) {
  if(items.length < 2) return true;

  return items.every((item, index, items) => {
    return JSON.stringify(item) === JSON.stringify(items[index - 1]) || index === 0;
  });
}

export function getURLParam(name: string) {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(name);
}
