import { createClient } from "next-sanity";

//... 

const client = createClient({
  projectId: "61elzmou",
  dataset: "production",
  apiVersion: "2023-12-08",
  useCdn: false
});
