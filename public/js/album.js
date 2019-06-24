deleteAlbum=(id)=>{
     const url='/band/deletealbum/'+id;
     const xhr=new XMLHttpRequest();
     xhr.open('DELETE',url,true);
     xhr.onload=function(){
      // const result=JSON.parse(xhr.responseText);
       if(xhr.readyState==4 || xhr.status===200)
       {
         alert('Album deleted');
         window.location.reload();
       }
       else {
         alert('error occured');
         window.location.reload();
       }
     }
     xhr.send(null);

}
