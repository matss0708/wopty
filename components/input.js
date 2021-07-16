import { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import TextField from '@material-ui/core/TextField';

const Input = ({ setcount }) => {
    const [post, setPost] = useState('');
    const [picker, setPicker] = useState(false);
    const [posting, setPosting] = useState(false);

    const postData = async () => {
        setPosting(true);
        if (post !== '') {
            await fetch('/api/post', {
                method: 'POST',

                body: JSON.stringify({
                    post: post,
                }),

                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        }
        setPost('');
        setcount(Math.random() * 300);
        setPosting(false);
    };
    const onChange = (e) => {
        setPost(e.target.value);
    };

    const addEmoji = (emoji) => {
        console.log(emoji);
        setPost(post + emoji.native);
    };
    return (
        <div className="w-full mb-2 bottom-0">
            <div className="flex justify-center pt-10">
                <div className=" lg:w-3/5 w-11/12 flex justify-center input-back p-2 rounded-md">
                    {/* <input type="text" className="w-3/5" onChange={(e) => onChange(e)} value={post} maxLength="200" /> */}
                    <TextField label="Post" variant="outlined" className="w-4/5" onChange={(e) => onChange(e)} value={post} inputProps={{ maxLength: 150 }} />

                    <button className={`lg:px-8 px-3 bg-black font-bold text-white ml-5 rounded-md ${posting ? 'animate-pulse' : ''}`} onClick={postData}>
                        Post
                    </button>
                    <button
                        className={`ml-3 rounded-md `}
                        onClick={() => {
                            setPicker(!picker);
                        }}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="10" x2="9.01" y2="10" />
  <line x1="15" y1="10" x2="15.01" y2="10" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
</svg>
                    </button>
                </div>
            </div>
            <div className="absolute bottom-24 lg:inset-x-2/3 sm:inset-x-24 inset-x-6">
                {picker ? (
                    <>
                        <Picker set="apple" onSelect={addEmoji} />
                    </>
                ) : null}
            </div>
        </div>
    );
};
export default Input;
