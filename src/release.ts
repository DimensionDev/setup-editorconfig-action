import os from 'node:os'
import { octokit, repo } from './shared'

export async function findRelease(version: string) {
  const release = await getRelease(version)
  const releasePrefix = getAssetPrefix()
  const matchedAsset = release.data.assets.find((asset) =>
    asset.name.startsWith(releasePrefix)
  )
  if (!matchedAsset) {
    throw new Error(`The binary '${releasePrefix}*' not found`)
  }
  return matchedAsset
}

function getRelease(version: string) {
  const { getLatestRelease, getReleaseByTag } = octokit.rest.repos
  if (version === 'latest') {
    return getLatestRelease(repo({}))
  }
  return getReleaseByTag(repo({ tag: version }))
}

function getAssetPrefix() {
  let platform: string = os.platform()
  if (platform === 'win32') {
    platform = 'windows'
  }
  let arch: string = os.arch()
  if (arch === 'x32') {
    arch = '386'
  } else if (arch === 'x64') {
    arch = 'amd64'
  }
  return `ec-${platform}-${arch}`
}
