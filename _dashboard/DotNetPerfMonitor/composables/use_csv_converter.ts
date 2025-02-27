import { log } from "console";
import * as Papa from "papaparse";
export default async function useCsvConverter(csvPath: string) {
  const response: any = await fetch(csvPath);
  const csvText: any = await response.text();

  //console.log(`csvText: ${csvText}`);

  const parsed = Papa.parse(csvText, {
    dynamicTyping: true,
    //preview: 4500,
    skipEmptyLines: true,
    fastMode: true,
    header: true,
  });
  const str = JSON.stringify(parsed.data);
  const json = JSON.parse(str);
  //console.log(`json: ${str}`);
  return json;
}
