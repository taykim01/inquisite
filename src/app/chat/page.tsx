import Container from "@/components/Container";
import MessageList from "@/components/MessageList";
import MessageInput from "@/components/MessageInput";
import { MessageProvider } from "@/hooks/message-provider";

export default function ChatPage() {
  return (
    <Container>
      <MessageProvider>
        <div className="flex flex-col h-full w-full items-center">
          <MessageList />
          <MessageInput />
        </div>
      </MessageProvider>
    </Container>
  );
}
