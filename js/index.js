const icon = d3.select('body').append('div')
               .style('position', 'absolute')
               .style('text-align', 'center')
               .style('padding', '5px 10px')
               .style('width', '50px')
               .style('background', 'green')
               .style('color', '#FFF')
               .style('border-radius', '100%')
               .style('opacity', 0);


function showIcon(e){
  let id=e.target.id
  
  icon.transition().style('opacity', .9)
      .style('left', (window.innerWidth/2-35) + 'px')   
      .style('top', 60 +'px')
  if(id === "smile"){
     icon.html("<i class='icon fa fa-smile-o' aria-hidden='true'></i>");
  }
  else{
     icon.html("<i class='icon fa fa-frown-o' aria-hidden='true'></i>");
  }
  
  setTimeout(function(){
    icon.transition().style('opacity', 0);
  }, 6000);

};

document.getElementById('smile').onclick= showIcon;
document.getElementById('frown').onclick= showIcon;