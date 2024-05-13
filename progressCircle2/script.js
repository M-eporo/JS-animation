var circle = new ProgressBar.Circle('#container', {
  color: '#35f',
  strokeWidth: 6.0,
  trailColor: '#888',
  trailWidth: 1.0,
  duration: 1000,
  easing: 'bounce',
  text: {
    style: {
      color: '#333',
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: 0,
      padding: 0,
      transform: {
        prefix: true,
        value: 'translate(-50%, -50%)',
      }	
    },
    autoStyleContainer: true,
  },	
  from: { width: 1, a:0},
  to: { width: 6, a:1 },
  step: function(state, circle, attachment) {		
    circle.setText(Math.round(circle.value() * 100) + '%');
    circle.path.setAttribute('stroke-width', state.width);		
  }
});
circle.animate(1.0);
