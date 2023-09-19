export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return ("mraza2");
  }

  if (query.toLowerCase().includes("name")) {
    return ("Ammar");
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const mulMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (mulMatch) {
    const x: number = parseInt(mulMatch[1]);
    const y: number = parseInt(mulMatch[2]);
    return (x * y).toString();
  }

  const minusMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x-y).toString();
  }


  return "";
}
