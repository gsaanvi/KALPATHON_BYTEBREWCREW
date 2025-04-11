import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Celebrated Complex Heron</title>
        <meta property="og:title" content="Celebrated Complex Heron" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Learn how we prioritize and protect your data privacy.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Sign Up</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">/screen-time-tracking</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">/home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Data Privacy</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Screen Time Tracking</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">/data-privacy</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to Healthy Screen Time, your partner in maintaining a
              balanced digital lifestyle.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Track your screen time usage to gain insights and make informed
              decisions.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">/goal-setting</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Goal Setting</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Set personalized goals to manage and optimize your screen time
              effectively.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Log In</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Sign Up</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Take control of your screen time
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Join us in creating healthier digital habits. Track your screen
              time, set goals, and receive reminders to help you stay focused
              and intentional with your device usage.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              View detailed reports of your screen time habits to make informed
              decisions on managing your usage.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Usage Reports</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Monitor and analyze your screen time activities to gain insights
              into your usage patterns.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">
              User Sign Up and Authentication
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Easily create an account and securely log in to track your screen
              time usage.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Screen Time Tracking</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to take control of your screen time?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Sign up now to start tracking your usage, setting goals, and
              improving your digital habits.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Sign Up</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              View detailed reports of your screen time patterns to make
              informed decisions about your usage.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Track your screen time usage across different devices to gain
              insights into your digital habits.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Goal Setting</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Screen Time Tracking</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Set personalized goals to limit your screen time and create
              healthier digital routines.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Usage Reports</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$12/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Sign up now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Sign up now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Usage reports</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Notification and reminders</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$80/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Sign up now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">All Plan 2 features</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Data privacy</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Customizable settings</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">All Plan 1 features</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$8/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$120/year</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Goal setting</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$50/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Screen time tracking</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Priority support</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$5/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Create an account to start tracking your screen time and setting
              goals.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Establish healthy screen time goals to help you achieve a more
              balanced digital lifestyle.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Track Screen Time</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Monitor how much time you spend on your devices to gain insights
              into your usage patterns.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Sign Up</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Set Goals</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Get reminders and notifications to help you stay on track with
              your screen time objectives.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Receive Notifications</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Parent</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Teacher</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Sarah Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Emily Wong</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              As a parent, I feel more in control of my children&apos;s screen
              time habits. It&apos;s been a game-changer for our family.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Mark Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Freelancer</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">David Miller</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              See what our users have to say about their experience with our
              screen time management tool.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Student</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              I&apos;ve noticed a significant improvement in my productivity and
              focus since using this app. Highly recommended!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              This tool helped me realize how much time I was spending on my
              phone mindlessly. Now I&apos;m more mindful of my usage.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              Setting goals for my screen time has helped me create a healthier
              work-life balance. Thank you!
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Cluj - Napoca</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Privacy Policy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">FAQs</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Data Privacy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
