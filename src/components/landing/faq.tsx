import { Accordion } from "radix-ui";
import { SectionTitle } from "./section-heading";

const questions = [
    {
        question: "What Exactly Is Crew?",
        answer: "An AI Chat With Six Specialists Behind It. Ask Questions Like Any Chat, Or Hand Over Whole Jobs That The Crew Plans, Does And Delivers.",
    },
    {
        question: "Can The Crew Spend My Money?",
        answer: "No. They Take Bookings And Purchases Right Up To The Payment Page, Then Stop. Only You Ever Enter Card Details Or Passwords.",
    },
    {
        question: "Do They Keep Working When I Log Off?",
        answer: "Yes. Jobs Run In The Cloud. Come Back To Finished Work, And Any Questions Waiting In Your Inbox.",
    },
    {
        question: "What Can They Use?",
        answer: "The Web, Their Own Cloud Computer With Real Browsers, And Apps You Connect Like Gmail, Calendar, Drive, Instagram And GitHub.",
    },
    {
        question: "Can I Add My Own Specialists?",
        answer: "Yes. Describe The Role In One Sentence And Harper Drafts A New Teammate For You To Review.",
    },
    {
        question: "How Do I Sign Up?",
        answer: "With Email And A Password, Or With GitHub. Your Crew Is Ready In Under A Minute.",
    },
];

export function Faq() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="flex justify-center border-t border-night-750 px-6 py-25"
        >
            <div className="flex w-full max-w-215 flex-col gap-9">
                <SectionTitle
                    id="faq-title"
                    className="reveal text-center text-[clamp(32px,4vw,48px)] leading-[1.06]"
                >
                    Questions? Answerd.
                </SectionTitle>
                <Accordion.Root
                    type="single"
                    collapsible
                    defaultValue={questions[0].question}
                    className="flex reveal flex-col gap-2.5"
                >
                    {questions.map(({ question, answer }) => (
                        <Accordion.Item
                            key={question}
                            value={question}
                            className="rounded-[18px] border border-night-700 bg-night-850 transition-[background] duration-200 ease-[ease] data-[state=open]:border-ember-800 data-[state=open]:bg-ember-950"
                        >
                            <Accordion.Header>
                                <Accordion.Trigger className="group flex min-h-16 w-full cursor-pointer items-center gap-4 px-6 py-4.5 text-left font-sans text-[16px] font-medium">
                                    <span className="flex-1">{question}</span>
                                    <span
                                        aria-hidden="true"
                                        className="flex size-7.5 flex-none items-center justify-center rounded-[99px] bg-night-750 text-[18px] leading-none text-muted-foreground transition-transform duration-250 ease-[ease] group-data-[state=open]:rotate-45 group-data-[state=open]:bg-transparent group-data-[state=open]:bg-ember-gradient group-data-[state=open]:text-ember-ink"
                                    >
                                        +
                                    </span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content asChild>
                                <p className="animate-[fade-up_0.25s_ease-out] px-6 pb-5.5 text-muted-foreground">
                                    {answer}
                                </p>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </section>
    );
}
