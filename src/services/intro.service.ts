import client from "./base.service";

async function getIntro(): Promise<IntroModel> {
  let result: IntroModel;
  await client
    .getEntries({
      content_type: "intro",
      locale: localStorage.getItem(process.env.REACT_APP_LANGKEY),
    })
    .then((entrie: EntrieModel) => {
      result = { ...entrie.items[0].fields };
      result.imageUrl = entrie.items[0].fields.image.fields.file.url;
    })
    .catch(console.error);

  return result;
}

export { getIntro };
