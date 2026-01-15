import Image from "next/image";
import "./Problem.css";

export default function Problem() {
  return (
    <section className="problem">
      <div className="problem-container">
        <div className="problem-header">
          <h2 className="problem-title">The Problem</h2>
          <p className="problem-subtitle">
            Nigeria's $50+ billion informal commerce market is trapped in chaos. Merchants struggle with inventory management, missed orders, and no access to capital. 
            Banks have millions of dormant SME customers but lack the infrastructure to serve them profitably.
          </p>
        </div>

        <div className="problem-cards">
          <div className="problem-card card-merchants">
            <div className="card-icon">
              <Image
                src="/briefcase-01.png"
                alt="Briefcase icon"
                width={48}
                height={48}
              />
            </div>
            
            <h3 className="card-title">For Merchants</h3>
            
            <ul className="card-list">
              <li className="card-item">
                <span className="item-icon">ⓘ</span>
                <span>No visibility into inventory—constant stockouts and overstock</span>
              </li>
              <li className="card-item">
                <span className="item-icon">ⓘ</span>
                <span>Missed orders buried in WhatsApp and chat messages</span>
              </li>
              <li className="card-item">
                <span className="item-icon">ⓘ</span>
                <span>Payment chaos—no tracking of who owes what</span>
              </li>
              <li className="card-item">
                <span className="item-icon">ⓘ</span>
                <span>No access to working capital without collateral</span>
              </li>
            </ul>

            <div className="card-buttons">
              <button className="btn-white">
                Request a Demo
                <span className="btn-arrow">▶</span>
              </button>
              <button className="btn-outline">
                Learn more
                <span className="btn-external">↗</span>
              </button>
            </div>
          </div>

          <div className="problem-card card-bank">
            <div className="card-icon">
              <Image
                src="/bank.png"
                alt="Bank icon"
                width={48}
                height={48}
              />
            </div>
            
            <h3 className="card-title">For Bank</h3>
            
            <ul className="card-list">
              <li className="card-item">
                <span className="item-icon">ⓘ</span>
                <span>Millions of SME accounts generating minimal revenue</span>
              </li>
              <li className="card-item">
                <span className="item-icon">ⓘ</span>
                <span>Can't assess credit risk for informal businesses</span>
              </li>
              <li className="card-item">
                <span className="item-icon">ⓘ</span>
                <span>Building infrastructure takes 2-3 years and millions</span>
              </li>
              <li className="card-item">
                <span className="item-icon">ⓘ</span>
                <span>Fintech competitors are stealing market share</span>
              </li>
            </ul>

            <button className="btn-blue">
              Partner with us
              <span className="btn-arrow">▶</span>
            </button>
{/* 
            <div className="card-image">
              <Image
                src="/access-bank.png"
                alt="Access Bank"
                width={200}
                height={120}
                className="bank-image"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}