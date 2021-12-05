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
    cmd13:git push origin//推送远程仓库
*/
//保存文件执行 git add .


