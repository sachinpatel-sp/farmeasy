function randomIdGenerator(title) {
  var date = new Date();
  var components = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
  ];

  var id = components.join("");
  title += id;
  return title;
}

function haversineDistance(coords1, coords2) {
  var lat2 = coords1[1];
  var lon2 = coords1[0];
  var lat1 = coords2[1];
  var lon1 = coords2[0];
  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var radlon1 = (Math.PI * lon1) / 180;
  var radlon2 = (Math.PI * lon2) / 180;
  var theta = lon1 - lon2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344;
  return dist;
}

module.exports = {
  randomIdGenerator: randomIdGenerator,
  haversineDistance: haversineDistance,
};
