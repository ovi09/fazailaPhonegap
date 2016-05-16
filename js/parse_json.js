$(document).ready(function(){
      load_parse();
});

 var trac_id=[];
function load_parse()
{
    var trac_id=[];
    var res='';
	var nev_text;
	$.getJSON('categories.json', function(data) {         
		
		var i;
		for(i=0;i<6;i++)
		{
		   trac_id.push(data[i].id);
		   res +='<li class="collection-item"><a href="content.html">'+data[i].id+data[i].title+'</a></li>';
		}
		$("#list_of_category_title").append(res);
		
		
		
		$.getJSON('events.json', function(event_data) {    
				//JSONArray ja_data = jsonObj.getJSONArray("data");
				 var length = event_data.length;
				
				 var i=0,j=0;
				 var nav_text='';
				
				 for(i=0;i<data.length;i++)
				 {
				   var  part_nev='';
					 if(i==data.length-1)
					 { 
					   alert(part_nev);
					 }
				 
				   part_nev+='<li class="dropdown"><a href="#">'+data[i].title+'</a><ul>';
				    
					
					var j=0;
				    var rander=function()
					{
					   if(j<length)
					   {
						  
						   if(event_data[j].cat_id==data[i].id)
						   {
						     part_nev+='<li><a href="collapsible.html">'+event_data[j].title+'</a></li>';
							 
							 console.log(event_data[j].cat_id+'-------------'+event_data[j].title);
						   }
						   j++;
						   rander();
					    }
						
				     else
					 {
					     part_nev+='</ul></li>';
						//alert(part_nev);
						$("#mobile-demo").append(part_nev);
					 }
				   };
				   rander();
				  
				 
				   
				 
				   
				
				
				   
				   
				 }
				// $("#mobile-demo").html(res);

		
				var i;
				/*for(i=0;i<trac_id.length;i++)
				{
				   trac_id.push(data[i].id);
				   res +='<li class="collection-item"><a href="content.html">'+data[i].id+data[i].title+'</a></li>';
				}
				$("#list_of_category_title").append(res);*/
	   });
	});
	
	
	
	
	
	
	
	
	
	/*<li class="dropdown"><a href="#">Javascript</a>
						<ul>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
						</ul>
					</li>*/
	
	

	
	
	

}