/* 
   1、show dbs   查看数据库 
   2、db.version 查看数据库版本
   3、use admin  进入/使用 数据库 use dbname
   4、show collections 查看db里的所有集合  //system.version
   5、db 显示当前数据库名称
   6、use user 切换或者创建user db
   7、db.user.insert({'name':'xiaoming'}) //新建数据集合和插入文件（数据），当集合没有时，这时候就可以新建一个集合，并向里边插入数据。
   8、db.user.find() //查询所有数据，这条命令会列出集合下的所有数据，可以看到MongoDB是自动给我们加入了索引值的
   9、db.user.findOne //查询第一条数据
   10、db.user.update({"name":"xiaoming"},{"name":"xiaoming",'age':18})
   //db.集合.update({查询},{修改}):修改文件数据，第一个是查询条件，第二个是要修改成的值。这里注意的是可以多加文件数据项的.
   11、db.user.remove({'name':'xiaohong'}) //删除数据
   12、db.user.drop() //删除集合user true
   13、db.dropDatabase() //删除数据库user db->user

   mongodb shell 可以使用类似js语法
   var x = 'hello'
   print(x)//hello
   function fn() {
       return 'fn'
   }
   fn()//fn

   关系型数据库与非关系性数据库的区别
   数据库 --> 数据库 （db）
   数据表（table） --> 集合（set collections）
   数据行 --> 文件 （document doc）
*/