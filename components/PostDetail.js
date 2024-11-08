import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const PostDetail = ({ title, image, author, body, category, date }) => {
    return (
       <div>
         <CardTitle className="text-4xl font-bold my-6">{title}</CardTitle>
         
         <Card className="shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="p-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-96 object-cover"
                />
            </CardHeader>
            <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                        {category}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-5 h-5" />
                        <span>{date}</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                    <User className="w-5 h-5 text-gray-500" />
                    <p className="text-sm text-gray-500">By {author}</p>
                </div>
                
                <CardDescription className="text-gray-700 leading-relaxed text-lg">
                    {body}
                </CardDescription>

                <div className="mt-6 flex space-x-4">
                    <Button variant="primary">Share</Button>
                    <Button variant="outline">Save</Button>
                </div>
            </CardContent>
         </Card>
       </div>
    );
};

export default PostDetail;
