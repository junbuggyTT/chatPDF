"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Message } from "ai";
import { useChat } from "ai/react";
import { Send } from "lucide-react";
import MessageList from "./MessageList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
    const router = useRouter();
    const { data, isLoading } = useQuery({
        queryKey: ["chat", chatId],
        queryFn: async () => {
            const response = await axios.post<Message[]>("/api/get-messages", {
                chatId,
            });
            return response.data;
        },
    });

    const { input, handleInputChange, handleSubmit, messages } = useChat({
        api: "/api/chat",
        body: {
            chatId,
        },
        initialMessages: data || [],
    });

    React.useEffect(() => {
        const messageContainer = document.getElementById("message-container");
        if (messageContainer) {
            messageContainer.scrollTo({
                top: messageContainer.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages]);
    return (
        <div className="flex flex-col h-screen">
            {/* header */}
            <div className="sticky top-0 inset-x-0 p-2 bg-white h-fit z-10 flex items-center justify-between">
                <h3 className="text-xl font-bold">Chat</h3>
            </div>

            {/* message list */}
            <MessageList messages={messages} isLoading={isLoading} />
            <div
                className="flex-grow overflow-auto p-2 bg-gray-50"
                id="message-container"
            >
                <MessageList messages={messages} isLoading={isLoading} />
            </div>

            <form
                onSubmit={handleSubmit}
                className="sticky bottom-0 inset-x-0 px-2 py-4 bg-white"
            >
                <div className="flex">
                    <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Ask any question..."
                        className="w-full"
                    />
                    <Button className="bg-blue-600 ml-2">
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ChatComponent;
