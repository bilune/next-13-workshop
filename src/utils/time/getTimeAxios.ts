import axios from "axios";

interface Time {
  datetime: string;
  timezone: string;
}

async function getTimeAxios(): Promise<Time> {
  console.log("Running axios request");
  const startTime = new Date().getTime(); // Record start time
  const res = await axios.get(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Cordoba"
  );
  const endTime = new Date().getTime(); // Record end time
  const elapsedTime = endTime - startTime; // Calculate elapsed time in milliseconds
  console.log(`Request completed in ${elapsedTime} ms`);
  return res.data;
}

export default getTimeAxios;
