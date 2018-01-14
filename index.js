/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.b0e41d03-b77e-4bbb-9d0b-f96c6215fd82' //undefined;	// TODO replace with your app ID (OPTIONAL).

const languageStrings = {
	'en': {
		translation: {
			FACTS: [
				'Nothing is impossible, the word itself says “I’m possible”!',
				'Whether you think you can or you think you can’t, you’re right.',
				'Life is 10% what happens to me and 90% of how I react to it.',
				'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
				'Remember no one can make you feel inferior without your consent.',
				'Do or do not. There is no try.',
				'Strive not to be a success, but rather to be of value.',
				'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
				'The most common way people give up their power is by thinking they don’t have any.',
				'Don’t judge each day by the harvest you reap but by the seeds that you plant.',
				'If you hear a voice within you say "you cannot paint," then by all means paint and that voice will be silenced.',
				'Build your own dreams, or someone else will hire you to build theirs.',
				'A person who never made a mistake never tried anything new.',
				'The only person you are destined to become is the person you decide to be.',
				'We can’t help everyone, but everyone can help someone.',
				'Nothing will work unless you do.',
			],
			SKILL_NAME: 'Motivating Skills',
			GET_FACT_MESSAGE: "You need to hear this: ",
			HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
			HELP_REPROMPT: 'What can I help you with?',
			STOP_MESSAGE: 'Good luck!',
		},
	},
	'en-US': {
		translation: {
			FACTS: [
				'Nothing is impossible, the word itself says “I’m possible”!',
				'Whether you think you can or you think you can’t, you’re right.',
				'Life is 10% what happens to me and 90% of how I react to it.',
				'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
				'Remember no one can make you feel inferior without your consent.',
				'Do or do not. There is no try.',
				'Strive not to be a success, but rather to be of value.',
				'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
				'The most common way people give up their power is by thinking they don’t have any.',
				'Don’t judge each day by the harvest you reap but by the seeds that you plant.',
				'If you hear a voice within you say "you cannot paint," then by all means paint and that voice will be silenced.',
				'Build your own dreams, or someone else will hire you to build theirs.',
				'A person who never made a mistake never tried anything new.',
				'The only person you are destined to become is the person you decide to be.',
				'We can’t help everyone, but everyone can help someone.',
				'Nothing will work unless you do.',
			],
			SKILL_NAME: 'Motivating quotes',
		},
	},
};

const handlers = {
	'LaunchRequest': function () {
		this.emit('GetMotivation');
	},
	'GetNewMotivate': function () {
		this.emit('GetMotivation');
	},
	'GetMotivation': function () {
		// Get a random space fact from the space facts list
		// Use this.t() to get corresponding language data
		const factArr = this.t('FACTS');
		const factIndex = Math.floor(Math.random() * factArr.length);
		const randomFact = factArr[factIndex];

		// Create speech output
		const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
		this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
	},
	'AMAZON.HelpIntent': function () {
		const speechOutput = this.t('HELP_MESSAGE');
		const reprompt = this.t('HELP_MESSAGE');
		this.emit(':ask', speechOutput, reprompt);
	},
	'AMAZON.CancelIntent': function () {
		this.emit(':tell', this.t('STOP_MESSAGE'));
	},
	'AMAZON.StopIntent': function () {
		this.emit(':tell', this.t('STOP_MESSAGE'));
	},
};

exports.handler = function (event, context) {
	const alexa = Alexa.handler(event, context);
	alexa.APP_ID = APP_ID;
	// To enable string internationalization (i18n) features, set a resources object.
	alexa.resources = languageStrings;
	alexa.registerHandlers(handlers);
	alexa.execute();
};
