//工作区---add(trac)------------ -->暂存区 ----commit---->本地仓库
//unstaged(untrack)                staged     commit01
/* 文件修改(M) */
//unstaged                staged     commit02
/* 实战 */
/* 
    command1：git add .(通配符)  //track
    command2git commit -m(message) hash  //U--A  提交
    cmd3:git log   //查看提交版本  退出按 Q
    cmd4:git reset --hard 哈希值  //回滚
    cmd5:git reflog //查看已经提交的删除记录
    cmd6:git branch //查看分支
    cmd7:git branch name //创建分支
    cmd8:git checkout name //切换分支 -b(无则创建)
    head->master 当前分支指示
    cmd9:git merge name  //合并分支  
    cmd10:git branch -d(-D) name //删除分支
    cmd11:git remote add origin  //连接远程仓库
    cmd12:git remote //查看远程仓库
    cmd13:git push origin master//推送远程仓库 [new branch]//本地仓库为空才有
    cmd14:git branch -vv //查看远程分支与本地分支的关系
    cmd15:git push --set-upstream origin master:master //推送并设置默认的远程与本地仓库关联
    //git push -f 强制覆盖（没有权限，不常用）
    cmd16:git clone url localurl   //克隆远程仓库
    cmd17:git fetch origin master //抓取远程仓库更新，不合并
    cmd18:git pull orgin master //抓取远程仓库更新并合并
    //解决合并冲突:手动修改，都pull抓取更新
    cmd19:git restore name //将文件从store变为unstore，取消跟踪，丢掉更新
    */
//保存文件执行 git add .


