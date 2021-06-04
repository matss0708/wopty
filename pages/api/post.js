import connectDB from '../../middleware/mongodb';
import Post from '../../models/post';

const post= async (req, res) => {
    if (req.method === 'POST') {
        const posts= await Post.find().sort({ addedTime: 1 }).limit(15)
        
        if(req.body.post){

            if(posts.length===15){
                const id=posts[0]._id
                await Post.deleteOne({_id:id})
            }

            var post = new Post({
                post: req.body.post
            })
            await post.save()
        }
        res.status(200).send('post saved')
      } else {
          const data= await Post.find().limit(15)
          res.status(200).send(data)
      }
  }
  export default connectDB(post);