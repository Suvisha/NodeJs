var http=require('http');
var fs=require('fs');
http.createServer(function(req,res)
{
   /*     FILESYSTEM Operations: 
     -> Read Files
   fs.readFile('demoFile.html',function(err,data)
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data);
        res.end();
    });
     ->Create File
    fs.appendFile('demoFile.txt','Start Tutorial...',function(err)
    {
        if(err) throw err;
          console.log('saved');
    });
    fs.open('demoFile.txt', 'w', function (err, file) 
    {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.writeFile('demoFile1.txt','Hello Content',function(err)
    {
        if(err) throw err;
        console.log('create file');
    });
     ->Update File
    fs.appendFile('demoFile1.txt','this is an example of nodejs.',function(err)
    {
        if(err) throw err;
        console.log('updated');
    }); 
    fs.writeFile('mynewfile3.txt', 'This is my text', function (err) 
    {
        if (err) throw err;
        console.log('Replaced!');
    });
     ->Delete File
    fs.unlink('demoFile.txt',function(err)
    {
        if(err) throw err;
        console.log('file deleted');
    });
     ->Rename File */
    fs.rename('demoFile1.txt','demoFile.txt',function(err)
    {
       if(err) throw err;
       console.log('file renamed'); 
    });
}
).listen(8080);