function getSimilarPhotos(similarPhotos, photos) {
  const similarIds = new Set(similarPhotos.map((photo) => photo.id));

  const similarPhotosInPhotos = photos.filter((photo) =>
    similarIds.has(photo.id)
  );

  return similarPhotosInPhotos;
}

export default getSimilarPhotos;
