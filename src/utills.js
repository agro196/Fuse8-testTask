
export async function getData(url) {
  const res = await fetch(url);
  if(!res.ok) {
    throw new Error(`Could not fetch ${url} , received ${res.status}`);
  }
  return await res.json();
}

export async function getHomes() {
  return await getData('https://603e38c548171b0017b2ecf7.mockapi.io/homes');
}