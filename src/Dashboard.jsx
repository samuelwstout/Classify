import React from 'react'
import useAuth from './useAuth'
import './App.css';

export const Dashboard = ({code}) => {
  const accessToken = useAuth(code)
  return (
    <div className="dashboard">{code}</div>
  )
}
