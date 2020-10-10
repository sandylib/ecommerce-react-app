import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../../components/Typography/Typography';
import Card from '../../components/Card/Card';
const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    display: 'grid',
    gridTemplateColumns: '30% 30% 30%',
    gridGap: '10px'
  }
});


function Zodiac(props) {
  const { classes } = props;

  let zodiacObj = [
    {
        id:0,
        name:"Rat",
        desc:"Rats have a strong intellectual gifting and are usually smart, witty, curious and perceptive people. They also have good taste and can be charming and humorous. Rats make good friends as they are loyal and generous to those within their intimate circle.",
        strength:"Intelligent, willing to learn and open to challenges",
        weakness:"Greedy or money-minded",
        compatibility:"Dragon, Monkey"
    },
    {
        id:1,
        name:"ox",
        desc:"The Ox is known to be diligent, focused and dependable. Such a person would most likely pay great attention to detail and have a serious personality. Those born in the Year of the Ox are usually strong and protective companions who enjoy the company of family and friends. However, they can also be introverted and solitary creatures.",
        strength:"Trustworthy, industrious and able to accomplish set goals",
        weakness:"Stubborn, insecure and prone to feelings of loneliness",
        compatibility:"Snake, Rooster"
    },
    {
        id:2,
        name:"tiger",
        desc:"Being natural leaders and go-getters, Tigers have a pretty impressive persona. Filled with courage, ambition and energy, they are also very passionate about life though they exhibit frequent mood swings. Unbeknownst to most people, Tigers are very affectionate too.",
        strength:"Confident with strong leadership qualities",
        weakness:"Can be temperamental at times",
        compatibility:"Horse, Dog"
    },
    {
        id:3,
        name:"rabbit",
        desc:"Rabbits are homely people who like nothing better than to entertain friends and family by the hearth. Their genuine kindness, empathy and warmth make them popular with almost everyone. Unfortunately, these very same traits also result in them being a frequent victim of exploitation.",
        strength:"Sincere and compassionate",
        weakness:"Easily manipulated due to their non-confrontational nature",
        compatibility:"Goat, Pig"
    },
    {
        id:4,
        name:"dragon",
        desc:"The Sign of the Dragon is considered the most auspicious Zodiac Sign in Chinese Astrology. It is common to see many Chinese couples try to conceive a baby born in the Year of the Dragon as they believe their child will then become very successful. Generally, Dragons are incredibly high-spirited and possess a magnetic personality. They’re innate leaders and make good people managers. On the down side, they also suffer from a superiority complex.",
        strength:"Charismatic and dynamic leadership qualities",
        weakness:"Conceited and self-centered",
        compatibility:"Monkey, Rat"
    },
    {
        id:5,
        name:"snake",
        desc:"Like their namesake, those born under the Sign of the Snake can be rather dangerous and should be treated with caution. Otherwise, they are actually outgoing and generous people. Snakes are clever, logical yet instinctive, and hard workers. They are also good investors.",
        strength:"Smart; and have good analytical and financial skills",
        weakness:"Insecure and easily jealous",
        compatibility:"Rooster, Ox"
    },
    {
        id:6,
        name:"horse",
        desc:"Horses love to be free and are independent people who take great pleasure in travelling. Though they enjoy love and intimacy, they can come across as a rolling stone who is unable to commit and settle down. Surprisingly, horses are highly seductive and clever with money. They can also be touchy creatures.",
        strength:"Self-sufficient and a financial expert",
        weakness:"Impatient",
        compatibility:"Dog, Tiger"
    },
    {
        id:7,
        name:"goat",
        desc:"Goats are thinkers with tremendous creative ability, who prefer to be left undisturbed in their contemplations. They also set a great store by appearances. Though they have admirable strengths, goats suffer from a lot of self doubt and need a lot of love and encouragement to ease their constant anxiety.",
        strength:"Inventive and resourceful",
        weakness:"Disorganized, insecure and edgy",
        compatibility:"Pig, Rabbit"
    },
    {
        id:8,
        name:"monkey",
        desc:"Monkeys are fun-loving people who are usually live-wires everywhere they go. Their optimism and enthusiasm is contagious but they tend to be a little wild. Monkeys have poor morals and put themselves first. They are also bad at maintaining committed relationships.",
        strength:"Optimistic and possess good listening skills",
        weakness:"Selfish and self-indulgent",
        compatibility:"Rat, Dragon"
    },
    {
        id:9,
        name:"rooster",
        desc:"Roosters are honest, down-to-earth and trusting people. They are neat, tend to be traditionalists and can be real sticklers. Roosters are also observant and ingenious creatures.",
        strength:"Truthful and sensible",
        weakness:"Perfectionist, gullible",
        compatibility:"Ox, Snake"
    },
    {
        id:10,
        name:"dog",
        desc:"Resembling the animal influencing their horoscope, Dogs are devoted to those they love. They are usually successful business people but are quite unlucky in their romantic life.  Dogs can turn out to be rigid and temperamental; and often cover up using white lies.",
        strength:"Loyal and sensitive",
        weakness:"Inflexible, have a bad habit of fibbing and prone to mood swings",
        compatibility:"Tiger, Horse"
    },
    {
        id:11,
        name:"pig",
        desc:"Unlike their animal counterpart, Pigs have exquisite taste. They are also pleasant and gracious. Pigs make good friends and are generally accommodating but don’t let their geniality fool you! Pigs can be very nasty when there is conflict.",
        strength:"Helpful and well-mannered",
        weakness:"Vengeful",
        compatibility:"Rabbit, Goat"
    }
]

  

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Zodiac
      </Typography>
      <div className={classes.images}>
        {zodiacObj.map((zodiac, idx)=> (
            <Card key={idx} />
        ))
    }
      </div>
    </Container>
  );
}

Zodiac.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Zodiac);
