var pairs =
{
"installing":{"war":1}
,"war":{"file":1,"include":1,"project":1,"plugin":1,"follows":1,"edit":1}
,"file":{"web":1,"located":1,"core":1}
,"web":{"container\u0027s":1,"application":1,"service":1}
,"container\u0027s":{"instructions":1}
,"instructions":{"install":1,"config":1,"configure":1}
,"install":{"war":1}
,"include":{"war":1}
,"project":{"maven\u0027s":1}
,"maven\u0027s":{"war":1}
,"plugin":{"container-specific":1}
,"container-specific":{"configuration":1}
,"configuration":{"provided":1,"jetty-web.xml":1,"tomcat":1,"configuring":1,"file":1}
,"provided":{"war":1}
,"follows":{"sun-web.xml":1}
,"sun-web.xml":{"-glassfish":1}
,"-glassfish":{"v2\u002Fv3":1}
,"v2\u002Fv3":{"configuration":1}
,"jetty-web.xml":{"-jetty":1}
,"-jetty":{"v5\u002Fv6":1}
,"v5\u002Fv6":{"configuration":1}
,"tomcat":{"passes":1}
,"passes":{"integration":1}
,"integration":{"tests":1}
,"tests":{"require":1}
,"require":{"specific":1}
,"specific":{"configuration":1}
,"configuring":{"web":1,"caches":1}
,"application":{"expand":1}
,"expand":{"war":1}
,"edit":{"web.xml":1}
,"web.xml":{"disabling":1}
,"disabling":{"restful":1,"soap":1}
,"restful":{"web":1}
,"service":{"comment":1,"section":1}
,"comment":{"restful":1}
,"section":{"disabling":1,"configuring":1}
,"soap":{"web":1}
,"caches":{"ehcache.xml":1}
,"ehcache.xml":{"configuration":1}
,"located":{"web-inf\u002Fclasses\u002Fehcache.xml":1}
,"web-inf\u002Fclasses\u002Fehcache.xml":{"follow":1}
,"follow":{"instructions":1}
,"config":{"file":1}
,"core":{"ehcache":1}
,"ehcache":{"instructions":1}
}
;Search.control.loadWordPairs(pairs);