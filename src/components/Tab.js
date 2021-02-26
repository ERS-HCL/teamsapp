// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * The 'PersonalTab' component renders the main tab content
 * of your app.
 */
class Tab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      context: {}
    }
  }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount(){
    // Get the user context from Teams and set it in the state
    microsoftTeams.getContext((context, error) => {
      this.setState({
        context: context
      });
    });
    // Next steps: Error handling using the error object
  }

  render() {

      let userName = Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";

      return (
        
      <div>
        <link rel='stylesheet' id='all-css-0' href='https://techcrunch.com/_static/??/wp-includes/css/dist/block-library/style.min.css,/wp-content/plugins/wp-parsely/wp-parsely.css,/wp-content/themes/techcrunch-2017/build/ec/css/main.css?m=1614009978' type='text/css' media='all' />
        <article class="post-block post-block--image post-block--unread"><header class="post-block__header"><h2 class="post-block__title"><a class="post-block__title__link" href="https://www.entrepreneur.com/article/304521">HootSuite: Current Digital Marketing Trends that can Help Startups Scale up Their Businesses</a></h2><div class="post-block__meta"><div class="river-byline"><span class="river-byline__authors"><span><a aria-label="Posts by Sarah Perez" href="/author/sarah-perez/">Umang Mathur</a></span></span><div class="river-byline__full-date-time__wrapper"><time class="river-byline__full-date-time" datetime="2017-11-11T17:48:46">11:18 PM GMT+5:30<span class="full-date-time__separator">•</span>November 10, 2017</time></div></div></div></header><div class="post-block__content">Maintaining social media websites is a necessity to gain success.  They need to be updated frequently to engage customers and to thrive in this era of new media. HootSuite helps you to schedule posts and post on multiple websites together. You can also reply to all the comments through your dashboard. It gives you the freedom to handle over 30 platforms...</div><footer class="post-block__footer"><img src="https://assets.entrepreneur.com/content/3x2/2000/20170323124746-shutterstock-601207940.jpeg?width=700&crop=2:1" width="108px" height="58px" ></img><figure class="post-block__media"></figure></footer></article>
<article class="post-block post-block--image post-block--unread"><header class="post-block__header"><h2 class="post-block__title"><a class="post-block__title__link" href="/2016/06/03/instagrams-new-algorithm-that-puts-the-best-posts-first-goes-live-for-all/">Instagram’s new algorithm that puts the best posts first goes live</a></h2><div class="post-block__meta"><div class="river-byline"><span class="river-byline__authors"><span><a aria-label="Posts by Sarah Perez" href="/author/sarah-perez/">Sarah Perez</a></span></span><div class="river-byline__full-date-time__wrapper"><time class="river-byline__full-date-time" datetime="2016-06-03T17:18:58">10:48 PM GMT+5:30<span class="full-date-time__separator">•</span>June 3, 2016</time></div></div></div></header><div class="post-block__content">If you’re looking at your Instagram today, you might notice something has changed: older posts from friends and other accounts you care about are now appearing above those that were shared mo...</div><footer class="post-block__footer"><figure class="post-block__media"><img src="https://techcrunch.com/wp-content/uploads/2013/09/developerlaunch.png?w=430&h=230&crop=1" width="108" height="58"></img></figure></footer></article>        
<article class="post-block post-block--image post-block--unread"><header class="post-block__header"><h2 class="post-block__title"><a class="post-block__title__link" href="/2013/09/18/feedly-now-powering-50-rss-based-applications-opens-api-to-all-developers/">Feedly, Now Powering 50 RSS-Based Applications, Opens API To All Developers</a></h2><div class="post-block__meta"><div class="river-byline"><span class="river-byline__authors"><span><a aria-label="Posts by Sarah Perez" href="/author/sarah-perez/">Sarah Perez</a></span></span><div class="river-byline__full-date-time__wrapper"><time class="river-byline__full-date-time" datetime="2013-09-18T15:25:23">8:55 PM GMT+5:30<span class="full-date-time__separator">•</span>September 18, 2013</time></div></div></div></header><div class="post-block__content">Feedly, a service making claims to the RSS reader throne Google abandoned by shutting down Google Reader, announced today that it’s now op...</div><footer class="post-block__footer"><img src="https://techcrunch.com/wp-content/uploads/2013/08/feedly-pro.png?w=430&h=230&crop=1" width="108px" height="58px" ></img><figure class="post-block__media"></figure></footer></article>
<article class="post-block post-block--image post-block--unread"><header class="post-block__header"><h2 class="post-block__title"><a class="post-block__title__link" href="/2013/08/05/google-reader-alternative-feedly-sells-out-of-newly-launched-pro-accounts-more-arriving-this-fall/">Google Reader Alternative Feedly Sells Out Of Newly Launched Pro Accounts, More Arriving This Fall</a></h2><div class="post-block__meta"><div class="river-byline"><span class="river-byline__authors"><span><a aria-label="Posts by Sarah Perez" href="/author/sarah-perez/">Sarah Perez</a></span></span><div class="river-byline__full-date-time__wrapper"><time class="river-byline__full-date-time" datetime="2013-08-05T17:48:46">11:18 PM GMT+5:30<span class="full-date-time__separator">•</span>August 5, 2013</time></div></div></div></header><div class="post-block__content">Barely a day after Google Reader replacement Feedly began offering a paid version of its service, the compa...</div><footer class="post-block__footer"><img src="https://techcrunch.com/wp-content/uploads/2013/06/feedly-cloud-apps.png?w=430&h=230&crop=1" width="108px" height="58px" ></img><figure class="post-block__media"></figure></footer></article>
      </div>);
  }
}
export default Tab;