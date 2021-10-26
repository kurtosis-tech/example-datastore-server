#!/usr/bin/env bash
# 2021-07-08 WATERMARK, DO NOT REMOVE - This script was generated from the Kurtosis Bash script template

set -euo pipefail   # Bash "strict mode"
script_dirpath="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root_dirpath="$(dirname "${script_dirpath}")"



# ==================================================================================================
#                                             Constants
# ==================================================================================================
UPDATE_VERSION_IN_FILE_SCRIPT_FILENAME="update-version-in-file.sh" # From devtools; expected to be on PATH

CONSTANT_FILE_RELATIVE_FILEPATH="example_datastore_server_version/example_datastore_server_version.go"
CONSTANT_PATTERN="ExampleDatastoreServerVersion = \"%s\""


# ==================================================================================================
#                                       Arg Parsing & Validation
# ==================================================================================================
show_helptext_and_exit() {
    echo "Usage: $(basename "${0}") new_version"
    echo ""
    echo "  new_version     The version of this repo that is about to be released"
    echo ""
    exit 1  # Exit with an error so that if this is accidentally called by CI, the script will fail
}

new_version="${1:-}"

if [ -z "${new_version}" ]; then
    echo "Error: No new version provided" >&2
    show_helptext_and_exit
fi



# ==================================================================================================
#                                             Main Logic
# ==================================================================================================
constant_file_abs_filepath="${root_dirpath}/${CONSTANT_FILE_RELATIVE_FILEPATH}"
if ! bash "${UPDATE_VERSION_IN_FILE_SCRIPT_FILENAME}" "${constant_file_abs_filepath}" "${CONSTANT_PATTERN}" "${new_version}"; then
    echo "Error: Couldn't update file '${constant_file_abs_filepath}' with new version '${new_version}' using pattern '${CONSTANT_PATTERN}'" >&2
    exit 1
fi
