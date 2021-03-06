import { Spring, config } from 'react-spring'
import Link from 'next/link'

const FADE_IN_DELAY = 100

const Intro = props => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6" style={{ paddingTop: '3rem' }}>
          <h1
            className="title has-text-weight-bold"
            style={{ fontSize: '2.8rem', marginBottom: '0.5rem' }}
          >
            Hi, we're Penn Labs.
          </h1>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay={FADE_IN_DELAY}
            config={config.molasses}
          >
            {props => (
              <div style={props}>
                <h2 className="subtitle" style={{ fontSize: '2rem' }}>
                  Built by students, for students.
                </h2>
                <p style={{ fontSize: '1.2rem' }}>
                  We are a team of student <strong>software engineers</strong>,{' '}
                  <strong>product designers</strong>, and{' '}
                  <strong>business developers.</strong> Our ultimate goal is
                  improving the Penn community. In addition to creating 100%
                  free high-quality products, we give back with educational
                  resources and technical support.
                </p>
              </div>
            )}
          </Spring>
          <br />
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1, borderColor: '#209CEE', color: '#209CEE' }}
            delay={FADE_IN_DELAY}
            config={config.molasses}
          >
            {props => (
              <div style={props}>
                {/* <a className="button is-success is-medium" href="/apply" style={{marginRight: "0.5rem"}}>Join Us <span className="icon is-small" style={{marginLeft: "0.1rem"}}><i className="fa fa-angle-double-right"></i></span> </a> */}
                <Link href="/products">
                  <a
                    style={{ marginRight: '0.5rem' }}
                    className="button is-info is-medium"
                  >
                    {' '}
                    View Products{' '}
                  </a>
                </Link>
                <a
                  href="https://github.com/pennlabs"
                  className="button is-light is-medium"
                >
                  {' '}
                  <i
                    style={{ marginRight: '0.5rem' }}
                    className="fab fa-github"
                  ></i>{' '}
                  GitHub{' '}
                </a>
              </div>
            )}
          </Spring>
        </div>
        <div
          className="column is-5"
          style={{ paddingLeft: '4rem', marginLeft: '2rem' }}
        >
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay={FADE_IN_DELAY}
            config={config.molasses}
          >
            {props => (
              <div style={props}>
                <figure className="image">
                  <img
                    style={{ width: '350px' }}
                    src="/static/img/test-hero.png"
                  />
                </figure>
              </div>
            )}
          </Spring>
        </div>
      </div>
    </div>
  </div>
)

export default Intro
