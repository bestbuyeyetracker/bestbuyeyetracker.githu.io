var heatmap = h337.create({
    container: document.querySelector('.heatmap')
  });
  
  heatmap.setData({
    max: 5,
    data: [{ x: 10, y: 15, value: 5}, ...]
  });