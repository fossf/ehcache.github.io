var pairs =
{
"loading":{"configuration":1}
,"configuration":{"cachemanager":1,"following":1,"defined":1,"file":1,"resource":1,"inputstream":1}
,"cachemanager":{"created":1,"based":1,"manager":1,"configuration":1}
,"created":{"creates":1}
,"creates":{"caches":1,"cachemanager":1}
,"caches":{"found":1}
,"found":{"provided":1}
,"provided":{"configuration":1}
,"following":{"creates":1}
,"based":{"configuration":1,"specified":1}
,"defined":{"ehcache.xml":1}
,"ehcache.xml":{"file":1}
,"file":{"classpath":1,"cachemanager":1,"src\u002Fconfig\u002Fehcache.xml":1}
,"classpath":{"cachemanager":1,"url":1}
,"manager":{"=cachemanager.newinstance":1}
,"=cachemanager.newinstance":{"following":1,"src\u002Fconfig\u002Fehcache.xml":1,"(url)":1,"(fis)":1}
,"specified":{"configuration":1}
,"src\u002Fconfig\u002Fehcache.xml":{"following":1,".getabsolutepath":1}
,"resource":{"classpath":1}
,"url":{"url":1,"=getclass":1}
,"=getclass":{".getresource":1}
,".getresource":{"(\u0022\u002Fanotherconfigurationname.xml":1}
,"(\u0022\u002Fanotherconfigurationname.xml":{"cachemanager":1}
,"(url)":{"following":1}
,"inputstream":{"inputstream":1,"fis":1}
,"fis":{"=new":1}
,"=new":{"fileinputstream":1}
,"fileinputstream":{"(new":1}
,"(new":{"file":1}
,".getabsolutepath":{"())":1}
,"())":{"try":1}
,"try":{"{cachemanager":1}
,"{cachemanager":{"manager":1}
,"(fis)":{"finally":1}
,"finally":{"{fis.close":1}
}
;Search.control.loadWordPairs(pairs);