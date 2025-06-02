"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./career.module.css";

const departments = [
  "Software Engineers",
  "Designers",
  "UI/UX Designers",
  "Data Analysts",
  "Marketing Professionals",
];

const jobs = [
  { dept: "Software Engineers", sub: "Backend Developer" },
  { dept: "Designers", sub: "Graphic Designer" },
  { dept: "UI/UX Designers", sub: "Product Designer" },
  { dept: "Data Analysts", sub: "Business Intelligence Analyst" },
  { dept: "Marketing Professionals", sub: "Digital Marketing Specialist" },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [isDeptDropdownOpen, setIsDeptDropdownOpen] = useState(false);

  // Filter jobs based on selected department
  const filteredJobs = selectedDept
    ? jobs.filter((job) => job.dept === selectedDept)
    : jobs;

  return (
    <section className={styles.CareersPage}>
      <div className={styles.Hero}>
        <h1 className={styles.title}>
          Become a part of our <span className={styles.teamBlue}>Team</span>
        </h1>
        <p className={styles.subtitle}>
          Join us to build amazing products and grow your career!
        </p>
      </div>

      <div className={styles.JobsSection}>
        <div className={styles.JobFilters}>
          <div
            className={styles.DepartmentDropdown}
            onMouseEnter={() => setIsDeptDropdownOpen(true)}
            onMouseLeave={() => setIsDeptDropdownOpen(false)}
          >
            <button className={styles.FilterButton}>
              Department
              <span
                className={`${styles.DropdownIcon} ${
                  isDeptDropdownOpen ? styles.DropdownIconOpen : ""
                }`}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M8 11L14 17L20 11"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className={styles.DropdownMenu}
              style={{
                display: isDeptDropdownOpen ? "flex" : "none",
              }}
            >
              {departments.map((dept) => (
                <button
                  key={dept}
                  className={styles.DropdownMenuItem}
                  onClick={() => setSelectedDept(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
          {/* Location Button */}
          <button className={styles.FilterButton}>Location</button>
        </div>

        {/* Job Openings Heading */}
        <h2 className={styles.JobOpeningsHeading}>Job Openings</h2>

        {/* Job Openings List */}
        <div className={styles.JobOpeningsList}>
          {filteredJobs.length === 0 ? (
            <div
              style={{
                color: "#0190ff",
                fontSize: "2rem",
                textAlign: "center",
                width: "100%",
              }}
            >
              No result
            </div>
          ) : (
            filteredJobs.map((job, idx) => (
              <div className={styles.JobOpeningRow} key={job.dept}>
                <div>
                  <div className={styles.JobDepartment}>{job.dept}</div>
                  <div className={styles.JobSubtitle}>({job.sub})</div>
                </div>
                <button className={styles.ApplyNowButton}>Apply Now</button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
