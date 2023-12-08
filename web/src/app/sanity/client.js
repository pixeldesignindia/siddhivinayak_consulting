import { createClient } from "next-sanity";
import { SanityClient } from "next-sanity";
const client = createClient({
    projectId: "61elzmou",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
});
export default client