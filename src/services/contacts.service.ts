import client from "./base.service";

async function getAllContacts(): Promise<ContactModel[]> {
  let result: ContactModel[] = [];
  await client
    .getEntries({
      content_type: "contact",
    })
    .then((entries: EntrieModel) => {
      result = entries.items.map((entrie: any) => {
        let item = entrie.fields as ContactModel;
        item.logo = entrie.fields.logo.fields.file.url;
        return item;
      });
    })
    .catch(console.error);

  return result;
}

export { getAllContacts };
