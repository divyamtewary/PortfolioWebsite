// Resolves images by file name (without extension) from the project's /images folder.
// Files are found when the app starts, so adding a correctly named file to /images
// is enough for it to appear. Missing files resolve to undefined and the UI falls back.
const modules = import.meta.glob('../../images/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const byName = {}
for (const [path, url] of Object.entries(modules)) {
  const file = path.split('/').pop()
  byName[file.replace(/\.[^.]+$/, '')] = url
}

export const getImage = (name) => byName[name]
