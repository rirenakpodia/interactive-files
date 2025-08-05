$(window).load(function(){
  $("#page").show();
  start();
});
$(function(){
  
  var looks = [$('.look-1'),
               $('.look-2'),
               $('.look-3'),
               $('.look-4'),
               $('.look-5'),
               $('.look-6')],
      ins = [],
      outs = [],
      index = 0,
      pindex = null,
      animating = false,
      autoTimeout,
      autoInterval,
      circs = [],
      link = $("#linker"),
      circLook = {};
  

  
  // place links for shop button
  // royal blues, gold dust, hot spots, silver shimmer, the lbd
  var shopLinks = ["#link1","#link2","#link3","#link4","#link5"];
  
    link.attr("href", shopLinks[index]);
  
  
  
  $(document).click(function(e){
    
    if (animating) return;
      var curr = $(e.target)
          if (curr.attr("id") != "arrow-right" &&
              curr.attr("id") != "arrow-left" &&
              curr.attr("src") != "imgs/left.png" &&
              curr.attr("src") != "imgs/right.png"){
            // window.location.href = shopLinks[index];
          }
    //
  });
  
  
  
  
  function animateFalse(){
    animating = false; 
  }
  
  window.start = function(){
    //console.log(circLook);
    animate();
    doAuto();
  };
  
  
  
  $(document).mousemove(function(){
    clearInterval(autoInterval);
    clearTimeout(autoTimeout);
    autoTimeout = setTimeout(doAuto, 5000);
    
  }).mousedown(function(){
    clearInterval(autoInterval);
    clearTimeout(autoTimeout);
    
  });
  
  function doAuto(){
    autoInterval = setInterval(function(){
      $("#arrow-right").trigger("click");
    }, 6000);
  };
  
  $("#arrow-left").click(function() {
    if (animating) return;
      
      index--;
    if (index < 0) index = 5;
    animate();
  }).css({opacity : 0}).delay(200).animate({opacity : 0.8})
    .hover(function(){
      $(this).stop().animate({opacity : 1});
    }, function(){
      $(this).stop().animate({opacity : 0.8});
    });
  
  $("#arrow-right").click(function() {
    
    if (animating) return;
      index++;
    if (index > 5) index = 0;
    animate();
    
  }).css({opacity : 0}).delay(200).animate({opacity : 0.8})
    .hover(function(){
      $(this).stop().animate({opacity : 1});
    }, function(){
      $(this).stop().animate({opacity : 0.8});
    });
  
  function animate(){
    animating = true
      
      if (pindex != null){
        outs[pindex]();
        
      }
    pindex = index;
    setTimeout(function(){
      ins[index]();
      link.attr("href", shopLinks[index]);
      for (var i = 0; i < circs.length; i++){
        circs[i].t = 0; 
      }
    }, 1200);
    setTimeout(function(){
      animating = false;
    }, 2000);
  }
  
   function ani(selector, d){
     var curr = circLook[selector];
      
     var t = Math.PI * 2 * Math.random();
     var r = Math.random() * 20 + 10;
     var newLocs = {
       left : curr.start.left + r * Math.cos(t),
       top : curr.start.top + r * Math.sin(t)
     };
     curr.css(newLocs);
     curr.css({
       opacity : 0,
       display : 'block'
     });
     curr.delay(d).animate({
       left : curr.start.left,
       top : curr.start.top,
       opacity : 1
     }, 2100 + Math.random() * 300, "easeOutElastic");
  }
  
  // look 1
  
  ins.push(function() {
    //animating = true;
    $("#left1").fadeIn();
    $("#right1").delay(200).fadeIn();
    ani("#sochill",400);
 
    ani("#copy1", 400);
    ani("#ellipse1", 700);
  
    //setTimeout(animateFalse, 1200);
  });
  circs.push($("#copy1"));
  circs.push($("#ellipse1"));
  circs.push($("#sochill"));
  
  outs.push(function() {
    //animating = true;
    $("#left1").delay(700).fadeOut();
    $("#right1").delay(500).fadeOut();
    $("#sochill").delay(400).fadeOut();
    $("#copy1").delay(200).fadeOut();
    $("#ellipse1").fadeOut();
    //setTimeout(animateFalse, 1200);
  });
  
 
  // look 2
  ins.push(function() {
    //animating = true;
    $("#left2").fadeIn();
    $("#right2").delay(200).fadeIn();
    
    
    ani("#copy2",400);
    ani("#ellipse22",500);
    ani("#ellipse21",700);
    //setTimeout(animateFalse, 1200);
  });
  circs.push($("#copy2"));
  circs.push($("#ellipse22"));
  circs.push($("#ellipse21"));
  
  
  
  outs.push(function() {
    //animating = true;
    $("#left2").delay(700).fadeOut();
    $("#right2").delay(500).fadeOut();
    
    
    $("#copy2").delay(400).fadeOut();
    $("#ellipse22").delay(200).fadeOut();
    $("#ellipse21").delay(0).fadeOut();
    
    
    //setTimeout(animateFalse, 1200);
  });
  
  // look 3
  ins.push(function() {
    //animating = true;
    $("#left3").fadeIn();
    $("#right3").delay(200).fadeIn();
    ani("#copy3",600);
    ani("#cozy",400);
    //setTimeout(animateFalse, 1200);
  });
  circs.push($("#copy3"));
  circs.push($("#cozy"));
  
  
  outs.push(function() {
    //animating = true;
    $("#left3").delay(600).fadeOut();
    $("#right3").delay(400).fadeOut();
    $("#copy3").delay(200).fadeOut();
    $("#cozy").delay(0).fadeOut();
    //setTimeout(animateFalse, 1200);
  });
  
  // look 4
  ins.push(function() {
    //animating = true;
    $("#left4").fadeIn();
    $("#right4").delay(300).fadeIn();
    ani("#copy4",400);
    ani("#ellipse41",500);
    ani("#ellipse42",700);
    //setTimeout(animateFalse, 1200);
    
  });
  circs.push($("#copy4"));
  circs.push($("#ellipse41"));
  circs.push($("#ellipse42"));
  
  outs.push(function() {
    //animating = true;
    $("#left4").delay(700).fadeOut();
    $("#right4").delay(500).fadeOut();
    $("#copy4").delay(400).fadeOut();
    $("#ellipse41").delay(300).fadeOut();
    $("#ellipse42").delay(0).fadeOut();
    //setTimeout(animateFalse, 1200);
  });
  
  // look 5
  ins.push(function() {
    //animating = true;
    $("#left5").fadeIn();
    $("#righ5").delay(300).fadeIn();
    ani("#copy5",400);
    ani("#xoxo",500);
    //setTimeout(animateFalse, 1200);
    
  });
  circs.push($("#copy5"));
  circs.push($("#xoxo"));
  
  
  outs.push(function() {
    //animating = true;
    $("#left5").delay(700).fadeOut();
    $("#righ5").delay(400).fadeOut();
    $("#copy5").delay(300).fadeOut();
    $("#xoxo").delay(0).fadeOut();
    //setTimeout(animateFalse, 1200);
  });
  
  // look 6
  ins.push(function() {
    //animating = true;
    $("#left6").fadeIn();
    $("#righ6").delay(300).fadeIn();
    $("#copy6").delay(400).fadeIn();
    ani("#ellipse6",500);
    //setTimeout(animateFalse, 1200);
    
  });
  //circs.push($("#copy6"));
  circs.push($("#ellipse6"));
  
  
  outs.push(function() {
    //animating = true;
    $("#left6").delay(700).fadeOut();
    $("#righ6").delay(500).fadeOut();
    $("#copy6").delay(400).fadeOut();
    $("#ellipse6").delay(0).fadeOut();
    //setTimeout(animateFalse, 1200);
  });
  
  for (var i = 0; i < circs.length; i++){
    circs[i].start = {
      left : parseFloat(circs[i].css("left")),
      top : parseFloat(circs[i].css("top"))
    };
    circLook[circs[i].selector] = circs[i];
  }
  
  for (var i = 0; i < looks.length; i++){
    looks[i].children("div").fadeOut(0);
    looks[i].show();
  }
  
   
  
  $("#page").hide();
});