export interface User {
    id: number;
    name: string;
    username: string;
    email : string;
}
// host = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
// topic = models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)
// name = models.CharField(max_length=200)
// description = models.TextField(null=True, blank=True)
// participants = models.ManyToManyField(
//     User, related_name='participants', blank=True)
// updated = models.DateTimeField(auto_now=True)
// created = models.DateTimeField(auto_now_add=True)
export interface Topic{
    id:number;
    name:string;
}
export interface Room {
    id:number;
    name:string;
    host:User;//model
    topic:Topic;
    description:string;
    participants:number;
    updated:Date;
    created:Date;
}
export interface Message{
    id:number;
    body:string;
    user:string;//model
    room:string;
    updated:Date;
    created:Date;
}