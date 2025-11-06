export default function Home() {
  const models = [
    {
      name: "SecureBERT 2.0",
      organization: "Cisco",
      releaseDate: "October 31, 2025",
      description: "Built on ModernBERT architecture, SecureBERT 2.0 offers extended context, faster throughput, lower latency, and reduced memory usage for advanced cybersecurity applications.",
      availability: "Open Source (HuggingFace & GitHub)",
      capabilities: [
        "Advanced threat detection",
        "Security log analysis",
        "Vulnerability assessment",
        "Optimized performance over original SecureBERT"
      ]
    },
    {
      name: "Big Sleep",
      organization: "Google DeepMind & Google Project Zero",
      releaseDate: "2025",
      description: "AI agent that actively searches for and discovers unknown security vulnerabilities in software, including zero-day exploits.",
      capabilities: [
        "Autonomous vulnerability discovery",
        "Zero-day exploit detection",
        "Real-world vulnerability identification",
        "Proactive security research"
      ]
    },
    {
      name: "Sec-Gemini",
      organization: "Google",
      releaseDate: "2025",
      description: "Extended Timesketch with agentic capabilities to accelerate incident response by automatically performing initial forensic investigations.",
      capabilities: [
        "Automated forensic investigation",
        "Incident response acceleration",
        "Timeline analysis",
        "Security event correlation"
      ]
    },
    {
      name: "Sec-PaLM",
      organization: "Google Cloud",
      releaseDate: "2025",
      description: "Specialized AI language model powering Google's Cloud Security AI Workbench for threat detection and analysis.",
      capabilities: [
        "Natural language threat queries",
        "Security threat summarization",
        "Actionable intelligence generation",
        "SIEM integration"
      ]
    },
    {
      name: "FACADE",
      organization: "Google",
      releaseDate: "2018 (Active in 2025)",
      description: "Processes billions of daily security events to identify insider threats using contrastive learning without requiring historical attack data.",
      capabilities: [
        "Insider threat detection",
        "Real-time event processing",
        "Behavioral anomaly detection",
        "Zero-shot threat identification"
      ]
    },
    {
      name: "Purple AI",
      organization: "SentinelOne",
      releaseDate: "2025",
      description: "Advanced endpoint protection AI with enhanced detection and response capabilities.",
      capabilities: [
        "63% faster threat detection",
        "55% reduced MTTR",
        "60% lower incident likelihood",
        "Real-time threat response"
      ]
    },
    {
      name: "Trend Micro AI Brain",
      organization: "Trend Micro",
      releaseDate: "2025",
      description: "Automated threat defense system that predicts attacks before they occur using AI-driven predictive analytics.",
      capabilities: [
        "Predictive threat analysis",
        "Automated defense mechanisms",
        "Proactive security measures",
        "Attack pattern prediction"
      ]
    },
    {
      name: "Darktrace Self-Learning AI",
      organization: "Darktrace",
      releaseDate: "Active in 2025",
      description: "Self-learning AI platform for detecting unknown threats through behavioral analysis and anomaly detection.",
      capabilities: [
        "Zero-day threat detection",
        "Network behavior analysis",
        "Autonomous response",
        "Machine learning adaptation"
      ]
    },
    {
      name: "CrowdStrike Falcon AI",
      organization: "CrowdStrike",
      releaseDate: "Active in 2025",
      description: "Cloud-based endpoint protection powered by AI for real-time threat detection and prevention.",
      capabilities: [
        "Endpoint protection",
        "Cloud-based threat intelligence",
        "Real-time malware prevention",
        "Behavioral analysis"
      ]
    },
    {
      name: "IBM QRadar Advisor with Watson",
      organization: "IBM",
      releaseDate: "Active in 2025",
      description: "AI-powered security intelligence platform for faster threat investigation and response.",
      capabilities: [
        "Threat investigation acceleration",
        "Natural language processing",
        "Security event correlation",
        "Automated threat hunting"
      ]
    }
  ];

  const trends = [
    {
      title: "AI-Powered Threat Detection",
      description: "Machine learning algorithms analyze vast data volumes to identify threat patterns beyond traditional signatures.",
      impact: "Over 80% of major companies now use AI for cyber defense."
    },
    {
      title: "Behavioral Analytics",
      description: "AI systems monitor user behavior to detect anomalies indicating credential misuse or insider threats.",
      impact: "Early detection of suspicious activities before escalation."
    },
    {
      title: "Predictive Security",
      description: "AI models predict future vulnerabilities and attacks, shifting from reactive to proactive defense.",
      impact: "Organizations can prevent attacks before they occur."
    },
    {
      title: "Natural Language Interfaces",
      description: "SIEM platforms integrate natural language queries for instant threat insights.",
      impact: "Analysts can ask questions in plain English for faster analysis."
    },
    {
      title: "Zero Trust with AI",
      description: "AI powers adaptive, context-aware access decisions in real-time.",
      impact: "Enhanced security through continuous authentication and authorization."
    },
    {
      title: "Automated Incident Response",
      description: "AI automates forensic investigation and response workflows.",
      impact: "Response times reduced from weeks to minutes in some cases."
    }
  ];

  const statistics = [
    { metric: "Market Size (2025)", value: "$28.51B", change: "+$5.4B from 2024" },
    { metric: "Projected Market (2032)", value: "$136.18B", change: "17.7% CAGR" },
    { metric: "Enterprise Adoption", value: "80%+", change: "Major companies using AI defense" },
    { metric: "AI-Powered Attacks", value: "50%", change: "Critical infrastructure orgs affected" },
    { metric: "Detection Speed Improvement", value: "63%", change: "Using advanced AI systems" },
    { metric: "MTTR Reduction", value: "55%", change: "With AI automation" }
  ];

  const challenges = [
    "Adversarial AI attacks targeting ML models",
    "Data poisoning vulnerabilities in training datasets",
    "Model theft and reverse engineering risks",
    "AI-generated malware and phishing campaigns",
    "State-sponsored AI cyber operations (China, Russia, Iran, North Korea)",
    "Machine-versus-machine cyber warfare scenarios",
    "False positives requiring human oversight",
    "Privacy concerns with AI monitoring systems"
  ];

  return (
    <div style={{ backgroundColor: '#0a0e27', color: '#e0e0e0', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700'
          }}>
            Latest AI Models in Cybersecurity
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#a0a0a0', maxWidth: '800px', margin: '0 auto' }}>
            Comprehensive overview of cutting-edge AI and machine learning models transforming cybersecurity in 2025
          </p>
        </header>

        {/* Statistics Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#667eea' }}>Market Overview & Statistics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {statistics.map((stat, index) => (
              <div key={index} style={{
                backgroundColor: '#1a1f3a',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #2a3f5f'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#a0a0a0', marginBottom: '8px' }}>{stat.metric}</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea', marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ fontSize: '0.85rem', color: '#76ff7a' }}>{stat.change}</div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Models Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#667eea' }}>Leading AI Models & Platforms</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
            {models.map((model, index) => (
              <div key={index} style={{
                backgroundColor: '#1a1f3a',
                padding: '30px',
                borderRadius: '12px',
                border: '1px solid #2a3f5f',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#ffffff', margin: 0 }}>{model.name}</h3>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                    padding: '4px 12px',
                    backgroundColor: '#2a3f5f',
                    borderRadius: '20px',
                    color: '#76ff7a'
                  }}>
                    {model.organization}
                  </span>
                  <span style={{
                    fontSize: '0.8rem',
                    padding: '4px 12px',
                    backgroundColor: '#2a3f5f',
                    borderRadius: '20px',
                    color: '#a0a0a0'
                  }}>
                    {model.releaseDate}
                  </span>
                </div>

                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#c0c0c0', marginBottom: '20px' }}>
                  {model.description}
                </p>

                {model.availability && (
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#76ff7a',
                    marginBottom: '15px',
                    fontWeight: '600'
                  }}>
                    ✓ {model.availability}
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#667eea', marginBottom: '10px' }}>
                    Key Capabilities:
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#c0c0c0' }}>
                    {model.capabilities.map((capability, idx) => (
                      <li key={idx} style={{ marginBottom: '5px', fontSize: '0.9rem' }}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trends Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#667eea' }}>Key Trends in 2025</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
            {trends.map((trend, index) => (
              <div key={index} style={{
                backgroundColor: '#1a1f3a',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #2a3f5f'
              }}>
                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '15px' }}>{trend.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#c0c0c0', marginBottom: '15px' }}>
                  {trend.description}
                </p>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#76ff7a',
                  fontWeight: '600',
                  padding: '10px',
                  backgroundColor: '#0f1624',
                  borderRadius: '6px',
                  borderLeft: '3px solid #76ff7a'
                }}>
                  Impact: {trend.impact}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#667eea' }}>Security Challenges & Threats</h2>
          <div style={{
            backgroundColor: '#1a1f3a',
            padding: '30px',
            borderRadius: '12px',
            border: '1px solid #ff6b6b'
          }}>
            <p style={{ fontSize: '1rem', color: '#c0c0c0', marginBottom: '20px' }}>
              While AI enhances cybersecurity defenses, it also introduces new vulnerabilities and attack vectors:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
              {challenges.map((challenge, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px',
                  backgroundColor: '#0f1624',
                  borderRadius: '8px',
                  borderLeft: '3px solid #ff6b6b'
                }}>
                  <span style={{ fontSize: '1.2rem', marginRight: '12px' }}>⚠️</span>
                  <span style={{ fontSize: '0.9rem', color: '#e0e0e0' }}>{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#667eea' }}>Future Outlook</h2>
          <div style={{
            backgroundColor: '#1a1f3a',
            padding: '30px',
            borderRadius: '12px',
            border: '1px solid #2a3f5f'
          }}>
            <div style={{ display: 'grid', gap: '20px' }}>
              <div style={{
                padding: '20px',
                backgroundColor: '#0f1624',
                borderRadius: '8px',
                borderLeft: '4px solid #667eea'
              }}>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '10px' }}>Machine vs. Machine Warfare</h3>
                <p style={{ fontSize: '0.95rem', color: '#c0c0c0', lineHeight: '1.6' }}>
                  By 2025, cybersecurity will evolve beyond simple AI-driven threat detection into full-scale machine-versus-machine warfare, where AI systems engage in real-time combat with adversarial AI.
                </p>
              </div>

              <div style={{
                padding: '20px',
                backgroundColor: '#0f1624',
                borderRadius: '8px',
                borderLeft: '4px solid #667eea'
              }}>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '10px' }}>Proactive Defense</h3>
                <p style={{ fontSize: '0.95rem', color: '#c0c0c0', lineHeight: '1.6' }}>
                  Organizations are shifting from reactive to proactive cybersecurity strategies, with AI models identifying trends, predicting vulnerabilities, and providing actionable intelligence before attacks occur.
                </p>
              </div>

              <div style={{
                padding: '20px',
                backgroundColor: '#0f1624',
                borderRadius: '8px',
                borderLeft: '4px solid #667eea'
              }}>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '10px' }}>Explainable AI (XAI)</h3>
                <p style={{ fontSize: '0.95rem', color: '#c0c0c0', lineHeight: '1.6' }}>
                  Integration of Explainable AI enhances intrusion detection systems by improving interpretability and trustworthiness while maintaining high predictive performance, addressing the "black box" problem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          paddingTop: '40px',
          borderTop: '1px solid #2a3f5f',
          color: '#a0a0a0'
        }}>
          <p style={{ fontSize: '0.9rem' }}>
            Data compiled from industry reports, security research, and official announcements as of 2025
          </p>
          <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>
            Last updated: November 2025
          </p>
        </footer>
      </div>
    </div>
  );
}
