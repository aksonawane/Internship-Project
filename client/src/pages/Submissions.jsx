import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import config from '../constants/config';

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadSubmissions = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(`${config.API_URL}/contact?limit=100`);
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error('Failed to load submissions');
        }

        setSubmissions(data.data || []);
      } catch {
        setError('Could not fetch submissions. Please ensure backend and MongoDB are running.');
      } finally {
        setLoading(false);
      }
    };

    loadSubmissions();
  }, []);

  return (
    <div className="bg-[#0f172a] pt-20 min-h-screen">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">Saved Contact Submissions</h1>
            <p className="text-gray-400">
              This page shows form submissions stored in MongoDB.
            </p>
          </motion.div>

          {loading && (
            <div className="text-gray-300 bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3">
              Loading submissions...
            </div>
          )}

          {!loading && error && (
            <div className="text-red-300 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          {!loading && !error && submissions.length === 0 && (
            <div className="text-gray-300 bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3">
              No submissions found yet.
            </div>
          )}

          {!loading && !error && submissions.length > 0 && (
            <div className="grid gap-4">
              {submissions.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="bg-[#1e293b]/70 border border-[#14b8a6]/25 rounded-2xl p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h2 className="text-white font-semibold text-lg">{item.name}</h2>
                    <span className="text-xs text-gray-400">
                      {new Date(item.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[#14b8a6] text-sm mb-2">{item.email}</p>
                  <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{item.message}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Submissions;
