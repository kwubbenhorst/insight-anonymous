// This file contains code that will render the Home page/landing page
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ConversationsList from '../components/ConversationsList';
import Conversation from '../components/Conversation';
import ConversationsForm from '../components/ConversationsFormPublic';
import { GET_ALL_PUBLIC_CONVERSATIONS } from '../utils/queries';
import AuthService from '../utils/auth';
import './Home.css'

const Home = () => {
    // Use state to manage the display of conversations and the conditional rendering of the welcome blurb, start a conversation dialogue or detailed conversation view
    const [conversationsByCategory, setConversationsByCategory] = useState(new Map());
    const [selectedConversationId, setSelectedConversationId] = useState(null);
    console.log("What the homepage (parent component) is passing to Conversation component as selectedConversationId:", selectedConversationId);
    const [isStartingPublicConversation, setIsStartingPublicConversation] = useState(false);
    const location = useLocation(); // Use the useLocation hook to get the current location
    const isStartConversationPage = location.pathname ==='/start-conversation'; 

    // Expect that conversations will be an array of fetched conversation objects
    const { loading, error, data } = useQuery(GET_ALL_PUBLIC_CONVERSATIONS);

    useEffect(() => {
      console.log("Data in Home component:", data); // Log data to check if it's available
        if (data && data.conversations) {
          // Sorting logic: Group conversations by expertiseCategory
          const categorizedConversations = new Map();
    
          data.conversations.forEach((conversation) => {
            const category = conversation.expertise;
            if (!categorizedConversations.has(category)) {
                categorizedConversations.set(category, []);
            }
            categorizedConversations.get(category).push(conversation);
          });

          // Log the categorized conversations to see if they are correctly grouped
          console.log("Categorized Conversations:", categorizedConversations);
    
          // Set conversationsByCategory state
          setConversationsByCategory(categorizedConversations);
      }
  }, [data]);
  
  const handleConversationClick = (conversationId) => {
    console.log('Clicked conversation ID:', conversationId);
    localStorage.setItem('selectedConversationId', conversationId);
    setSelectedConversationId(conversationId);
    console.log('Selected conversation ID after update:', selectedConversationId);
  };

  const navigate = useNavigate();
  
  //Function to handle starting a new public conversation, when click is triggers on the +New Public Conversation btn
  const handleStartPublicConversation = () => {
    if (AuthService.loggedIn()) {
      // User is authenticated, set the state to indicate starting a public conversation which will trigger conditional rendering of the ConversationForm component in the Homepage's jsx return
      setIsStartingPublicConversation(true);
      navigate('/start-conversation');
    } else {
      console.log('User not logged in. Redirecting to login page...');
      navigate('/login'); // Use navigate to redirect user to login page
    }
  };

  return (
    <div className="main-content container">
        <div className="row">
          {isStartConversationPage || isStartingPublicConversation ? (
            <ConversationsForm />
          ) : selectedConversationId ? (
            <Conversation
              conversationId={selectedConversationId}  
              onClose={() => setSelectedConversationId(null)}
            />
          ) : (
                <>
                    <div className="col">
                        <div className="welcome-blurb-public-conversation-forum">
                            <h2 className="main-page-title">Welcome to Soul Bench</h2>
                            <h2 className="byline-quote">~Remember: even when life feels unstable, there's always a bench nearby to support you!</h2>
                            <p>
                            Ever find yourself on a bench, pouring out your problems to a complete stranger? Ever marvelled at how patiently a stranger listens and what apt counsel they can give? Do you regularly find yourself being that listener? In a world of increasing social isolation, and unprecedented demand for costly mental health resources, Soul Bench offers a free virtual forum for talking through life's perplexities with anonymous others. Our listeners do not have formal degrees in psychiatry, psychotherapy or social work, but their insights, expertise and empathy might be all you need to surmount some personal, financial or career-related problem. Equally, those who engage this community as a listener know the reward of offering their own victories and acquired life-wisdom to a fellow-traveller.<br></br><br></br>Imagine our online environment like a park. As you meander its walkways, there's a pavilion lined with perimeter bench seating, enough to host a conversation circle on a variety of topics. You can always listen to (view) these conversations, but if you wish to make comments or start a conversation, you will need to log in. On first login you'll sign up as either a listener or a sharer.  You'll keep this role and your username as your screen name throughout your time at Soul Bench. Once logged in, you can claim your own bench, where listener and sharer meet one on one. You are limited to one private conversation at a time. Sharers initiate the private conversations and are usually the ones to close them. Listeners commit to check the forum at least twice a day.<br></br><br></br>For many, life is not a walk in the park! Our goal at Soul Bench is to democratize wisdom and to lessen an overwhelmed person's sense that they are completely alone. We believe it is within everyone's grasp to flourish within their circumstances. Sometimes it takes a little support.
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
        <div className="row public-conversations-section">
          <div className="public-conversations-header-section">
            <div className="row">
              <div className="col image-column-left">
                <img className="pavilion-image" src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710690242/eliptical_pavilion_gym6bm.png" alt="simple line drawing of a pavilion with perimeter bench seating" />
              </div>
              <div className="col title-and-blurb-column-middle">
                <h3 id="welcome-to-pavilion-title">Grab a bench in the pavilion</h3>
                <p id="welcome-to-pavilion-blurb">There are always ongoing conversations here in the pavilion. Click to view. Login to participate. Logged in users can start a new public conversation here or a private conversation on their own bench at login. </p>
              </div>
              <div className="col button-column-right">
                <button id="start-public-conversation-btn" onClick={handleStartPublicConversation}>+ New Public Conversation</button>  
              </div>
            </div>
          </div>
          <div className="public-conversations-list-section">
            <div className="row">
              <div className="col">
                <h3 className="conversations-list-header">Financial</h3>
                <ConversationsList
                  conversations={conversationsByCategory.get('financial') || []}
                  expertise="Financial"
                  onConversationClick={handleConversationClick}
                />
              </div>
              <div className="col">
                <h3 className="conversations-list-header">Personal</h3>
                <ConversationsList
                  conversations={conversationsByCategory.get('personal') || []}
                  expertise="Personal"
                  onConversationClick={handleConversationClick}
                />
              </div>
              <div className="col">
                <h3 className="conversations-list-header">Career</h3>
                <ConversationsList
                  conversations={conversationsByCategory.get('career') || []}
                  expertise="Career"
                  onConversationClick={handleConversationClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Outlet />
    </div>
);
};

export default Home;
