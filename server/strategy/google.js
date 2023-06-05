import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport'

passport.use(new GoogleStrategy({
    clientID: '526237941324-mpu4nclief2bfuhkvbipp79apt10vvkt.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:5173/auth/google/callback",
    passReqToCallback: true
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});

export default passport