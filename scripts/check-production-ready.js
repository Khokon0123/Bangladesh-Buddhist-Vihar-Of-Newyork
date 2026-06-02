#!/usr/bin/env node

/**
 * Production Readiness Check Script
 * Validates that the project is ready for production deployment
 */

const fs = require('fs');
const path = require('path');

const checks = {
  passed: [],
  failed: [],
  warnings: [],
};

function checkFileExists(filePath, required = true) {
  const exists = fs.existsSync(path.join(process.cwd(), filePath));
  if (exists) {
    checks.passed.push(`✓ ${filePath} exists`);
  } else if (required) {
    checks.failed.push(`✗ ${filePath} is missing (required)`);
  } else {
    checks.warnings.push(`⚠ ${filePath} is missing (optional)`);
  }
  return exists;
}

function checkEnvFile() {
  const envExample = checkFileExists('.env.example', true);
  const envLocal = checkFileExists('.env.local', false);
  
  if (!envLocal) {
    checks.warnings.push('⚠ .env.local not found - make sure to set environment variables in production');
  }
}

function checkBuildFiles() {
  checkFileExists('next.config.mjs', true);
  checkFileExists('package.json', true);
  checkFileExists('tsconfig.json', true);
  checkFileExists('tailwind.config.ts', true);
}

function checkErrorHandling() {
  checkFileExists('app/error.tsx', true);
  checkFileExists('app/not-found.tsx', true);
  checkFileExists('app/global-error.tsx', true);
  checkFileExists('components/ErrorBoundary.tsx', true);
}

function checkRequiredDirectories() {
  const requiredDirs = [
    'app',
    'components',
    'lib',
    'public',
  ];
  
  requiredDirs.forEach(dir => {
    checkFileExists(dir, true);
  });
}

function checkPackageJson() {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8')
  );
  
  // Check for required scripts
  const requiredScripts = ['build', 'start', 'lint'];
  requiredScripts.forEach(script => {
    if (packageJson.scripts[script]) {
      checks.passed.push(`✓ Script "${script}" exists`);
    } else {
      checks.failed.push(`✗ Script "${script}" is missing`);
    }
  });
  
  // Check for production dependencies
  if (packageJson.dependencies.next) {
    checks.passed.push(`✓ Next.js is installed (${packageJson.dependencies.next})`);
  } else {
    checks.failed.push('✗ Next.js is not installed');
  }
}

function printResults() {
  console.log('\n🔍 Production Readiness Check\n');
  console.log('='.repeat(50));
  
  if (checks.passed.length > 0) {
    console.log('\n✅ Passed Checks:');
    checks.passed.forEach(check => console.log(`  ${check}`));
  }
  
  if (checks.warnings.length > 0) {
    console.log('\n⚠️  Warnings:');
    checks.warnings.forEach(warning => console.log(`  ${warning}`));
  }
  
  if (checks.failed.length > 0) {
    console.log('\n❌ Failed Checks:');
    checks.failed.forEach(failure => console.log(`  ${failure}`));
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`\nSummary: ${checks.passed.length} passed, ${checks.warnings.length} warnings, ${checks.failed.length} failed\n`);
  
  if (checks.failed.length > 0) {
    console.log('❌ Project is NOT ready for production. Please fix the failed checks.\n');
    process.exit(1);
  } else if (checks.warnings.length > 0) {
    console.log('⚠️  Project is ready but has warnings. Review them before deploying.\n');
    process.exit(0);
  } else {
    console.log('✅ Project is ready for production deployment!\n');
    process.exit(0);
  }
}

// Run all checks
console.log('Running production readiness checks...\n');

checkBuildFiles();
checkErrorHandling();
checkRequiredDirectories();
checkEnvFile();
checkPackageJson();

printResults();

